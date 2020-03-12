import React from 'react'
import {
  useUser,
  useFirestore,
  useFirestoreDocData,
  useFirestoreCollection
} from 'reactfire'
import { Steps } from 'config'

export function useConfig() {
  const currentPromoRef = useFirestore().doc('config/current')
  const currentPromo = useFirestoreDocData(currentPromoRef).promo

  const promosRef = useFirestore().doc('config/promos')
  const promos = useFirestoreDocData(promosRef)

  const myRef = Object.keys(promos).find(key => key === `promo-${currentPromo}`)
  const info = promos[myRef]

  const docsRef = useFirestore().doc('config/docs')
  const docs = useFirestoreDocData(docsRef)

  const candidatesRef = useFirestore().doc('config/candidates')
  const candidates = useFirestoreDocData(candidatesRef)

  const evRef = useFirestore().doc('config/evaluacion')
  const ev = useFirestoreDocData(evRef)

  const config = {
    currentPromo,
    ...info,
    docs,
    candidates,
    evaluacion: ev
  }

  return config
}

export function useFullUser() {
  const user = useUser()

  const adminListRef = useFirestore().collection('admin')
  const adminListSnapshot = useFirestoreCollection(adminListRef)
  const adminList = adminListSnapshot.docs.map(doc => doc.id)
  if (adminList.includes(user.uid)) {
    user.profile = {}
    user.isAdmin = true
  }

  const userDetailsRef = useFirestore().collection('candidates').doc(user.uid)
  const profile = useFirestoreDocData(userDetailsRef)
  user.profile = profile

  React.useEffect(() => {
    if (user.profile.win) {
      setTimeout(() => userDetailsRef.update({ win: false }), 7000)
    }
  }, [user.profile.win, userDetailsRef])

  return user
}

export function useStepper() {
  const user = useFullUser()
  const config = useConfig()

  if (user.isAdmin) return '/admin'

  if (!user.profile.progress) return '/pasos/empecemos'
  if (user.profile.progress === 'html') {
    if (!user.profile.htmlScore) return (Steps['Introducción'])
    else {
      const htmlScore = parseInt(user.profile.htmlScore);
      if (htmlScore >= Number(config.evaluacion.tests['html-y-css'])) return Steps['JS']
    }
  }
  if (user.profile.progress === 'js') {
    const jsScore = parseInt(user.profile.jsScore);
    if (jsScore > Number(config.evaluacion.tests['javascript'])) return Steps['English Test']
  }
  if (user.profile.progress === 'proctoring') return Steps['Proctoring']
  else return '/'
}

export function useArenguHiddenFields() {
  const user = useUser()
  return [{ key: 'email', value: user.email }]
}
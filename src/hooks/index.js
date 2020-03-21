import React, { useState, useEffect } from 'react'
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
  const [route, setRoute] = useState('/')
  const user = useFullUser()

  useEffect(() => {
    if (user.isAdmin && !user.profile) setRoute('/admin')

    if (!user.profile.progress) setRoute('/pasos/empecemos')

    if (user.profile.progress === 'started') setRoute('/pasos/html')

    if (user.profile.progress &&  user.profile.progress === 'html') {
      if (!user.profile.htmlScore) setRoute(Steps['Introducción'])
      if (user.profile.htmlScore) setRoute(Steps['JS'])
    }

    if (user.profile.progress && user.profile.progress.toLowerCase().trim() === 'proctoring') {
      console.log('WERE HERE')
      setRoute(Steps['Tests inglés y psicométricos'])
    }

  }, [user.isAdmin, user.profile, user])

  return route
}

export function useArenguHiddenFields() {
  const user = useUser()
  return [{ key: 'email', value: user.email }]
}


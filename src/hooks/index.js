import { useUser, useFirestore, useFirestoreDocData } from 'reactfire'
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
  const userDetailsRef = useFirestore().collection('candidates').doc(user.uid)
  const profile = useFirestoreDocData(userDetailsRef)
  user.profile = profile
  return user
}

export function useStepper() {
  const user = useFullUser()
  const config = useConfig()

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
  else return '/'
}
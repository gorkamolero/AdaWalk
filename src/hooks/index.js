import { useUser, useFirestore, useFirestoreDocData } from 'reactfire'

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
  const candidates = useFirestoreDocData(docsRef)

  const config = {
    currentPromo,
    ...info,
    docs,
    candidates
  }

  return config
}

export function useFullUser() {
  const user = useUser()
  console.log('UYSER', user.uid)
  const userDetailsRef = useFirestore().collection('candidates').doc(user.uid)
  const profile = useFirestoreDocData(userDetailsRef)
  console.log('Profile', profile)
  user.profile = profile
  return user
}
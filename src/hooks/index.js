import { useFirestore, useFirestoreDocData } from 'reactfire'

export function useConfig() {
  const currentPromoRef = useFirestore().doc('config/current')
  const currentPromo = useFirestoreDocData(currentPromoRef).promo

  const promosRef = useFirestore().doc('config/promos')
  const promos = useFirestoreDocData(promosRef)

  const myRef = Object.keys(promos).find(key => key === `promo-${currentPromo}`)
  const info = promos[myRef]

  const docsRef = useFirestore().doc('config/docs')
  const docs = useFirestoreDocData(docsRef)

  const config = {
    currentPromo,
    ...info,
    docs
  }

  return config
}
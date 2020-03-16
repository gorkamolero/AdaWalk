import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
// import { useHistory, useParams } from 'react-router-dom'

const ARENGU_SDK_LOADED = 'af-init'

/**
 * Component to render a form from Arengu
 */
export const ArenguForm = ({ id, hiddenFields, fields }) => {
  const container = useRef()
  // let history = useHistory()

  useEffect(() => {
    let listener = null

    const initSDK = () => {
      return window.ArenguForms.embed(id, container.current).then(form =>
        setHiddenFields(form)
      )
    }

    const waitLoadEventAndInitSdk = () => {
      listener = initSDK.bind(this)
      document.addEventListener(ARENGU_SDK_LOADED, listener, { once: true })
    }

    const setHiddenFields = form => {
      if (hiddenFields == null) {
        return
      }

      hiddenFields.forEach(o => {
        form.setHiddenField(o.key, o.value)
      })
    }

    if (window.ArenguForms != null) {
      initSDK()
    } else {
      waitLoadEventAndInitSdk()
    }

    return () => {
      if (listener != null) {
        document.removeEventListener(ARENGU_SDK_LOADED, listener)
      }
    }
  }, [id, hiddenFields])

  return <div ref={container} />
}

ArenguForm.propTypes = {
  /** Form ID to be rendered */
  id: PropTypes.string.isRequired,
  /** Array of hidden fields to bet set */
  hiddenFields: PropTypes.arrayOf(
    PropTypes.shape({
      /** Key of your hidden field */
      key: PropTypes.string,
      /** Value of your hidden field */
      value: PropTypes.string
    })
  )
}

export default ArenguForm

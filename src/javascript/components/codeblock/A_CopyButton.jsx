import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import iconCopy from '../../../images/icons/Q_Copy-20.svg'
import iconCheck from '../../../images/icons/Q_Check-20.svg'

const CONFIG = {
  resetDelay: 2000,
  textDefault: 'Копировать',
  textCopied: 'Скопировано'
}

const iconVariants = {
  initial: {
    scale: 0,
    opacity: 0
  },
  animate: {
    scale: 1,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 500,
      damping: 25
    }
  },
  exit: {
    scale: 0,
    opacity: 0,
    transition: {
      duration: 0.15
    }
  }
}

/**
 * Копирует текст в буфер обмена
 */
async function copyToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text)
    return true
  } catch (err) {
    return false
  }
}

function A_CopyButton({ getCode }) {
  const [isCopied, setIsCopied] = useState(false)

  const handleClick = async () => {
    if (isCopied) return

    const code = getCode()
    if (!code) return

    const success = await copyToClipboard(code)
    if (!success) return

    setIsCopied(true)

    setTimeout(() => {
      setIsCopied(false)
    }, CONFIG.resetDelay)
  }

  const currentIcon = isCopied ? iconCheck : iconCopy
  const currentText = isCopied ? CONFIG.textCopied : CONFIG.textDefault

  return (
    <button
      type="button"
      className={`A_CopyButton ${isCopied ? 'copied' : ''}`}
      onClick={handleClick}
    >
      <AnimatePresence mode="wait">
        <motion.img
          key={currentIcon}
          src={currentIcon}
          alt=""
          className="A_CopyButton__icon"
          aria-hidden="true"
          variants={iconVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        />
      </AnimatePresence>

      <span className="A_CopyButton__text">{currentText}</span>
    </button>
  )
}

export default A_CopyButton

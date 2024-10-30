'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'

const ITALIAN_PHONETIC_ALPHABET = {
  'A': 'Ancona', 'B': 'Bologna', 'C': 'Como', 'D': 'Domodossola', 'E': 'Empoli',
  'F': 'Firenze', 'G': 'Genova', 'H': 'Hotel', 'I': 'Imola', 'J': 'i-lunga',
  'K': 'Kappa', 'L': 'Livorno', 'M': 'Milano', 'N': 'Napoli', 'O': 'Orvieto',
  'P': 'Pisa', 'Q': 'Quadro', 'R': 'Roma', 'S': 'Siena', 'T': 'Torino',
  'U': 'Udine', 'V': 'Venezia', 'W': 'Doppia Vu', 'X': 'Ics', 'Y': 'Ipsilon', 'Z': 'Zeta'
}

const translations = {
  en: {
    title: 'Italian Phonetic Alphabet Online',
    subtitle: 'Italian Phonetic Text Converter (with City Names)',
    enterText: 'Enter Text',
    placeholder: 'Type your text here...',
    originalText: 'Original Text:',
    phoneticVersion: 'Phonetic Version:',
    clearText: 'Clear Text',
    emptyState: 'Enter text above to see the phonetic conversion'
  },
  it: {
    title: 'Alfabeto Fonetico Italiano Online',
    subtitle: 'Convertitore di Testo in Alfabeto Fonetico Italiano (con Nomi di Città)',
    enterText: 'Inserisci il Testo',
    placeholder: 'Scrivi il tuo testo qui...',
    originalText: 'Testo Originale:',
    phoneticVersion: 'Versione Fonetica:',
    clearText: 'Cancella Testo',
    emptyState: 'Inserisci il testo sopra per vedere la conversione fonetica'
  }
}

export function PhoneticConverter() {
  const [inputText, setInputText] = useState('')
  const [language, setLanguage] = useState<'en' | 'it'>('en')

  const t = translations[language]

  const textToPhonetic = (text: string) => {
    return text
      .toUpperCase()
      .split('')
      .map(char => char.match(/[A-Z]/) ? ITALIAN_PHONETIC_ALPHABET[char] : char)
      .join(' ')
  }

  const getColorForLetter = (letter: string) => {
    const colors = [
      'text-red-500', 'text-blue-500', 'text-green-500', 'text-purple-500',
      'text-yellow-500', 'text-pink-500', 'text-indigo-500', 'text-orange-500'
    ]
    const index = letter.toUpperCase().charCodeAt(0) % colors.length
    return colors[index]
  }

  const renderPhoneticText = (text: string) => {
    const phoneticWords = textToPhonetic(text).split(' ')
    return phoneticWords.map((word, index) => {
      if (word.length === 0) return null
      const firstLetter = word[0]
      const rest = word.slice(1)
      const colorClass = getColorForLetter(firstLetter)
      
      return (
        <span key={index} className="inline-block mr-2 mb-2">
          <span className={`font-bold ${colorClass}`}>{firstLetter}</span>
          {rest}
        </span>
      )
    })
  }

  return (
    <Card className="w-full max-w-4xl mx-auto p-8 space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">{t.title}</h1>
          <p className="text-xl text-muted-foreground mt-2">{t.subtitle}</p>
        </div>
        <Button
          variant="outline"
          size="default"
          onClick={() => setLanguage(lang => lang === 'en' ? 'it' : 'en')}
          aria-label={`Switch to ${language === 'en' ? 'Italian' : 'English'}`}
          className="text-lg px-4 py-2"
        >
          {language === 'en' ? '🇮🇹 Italiano' : '🇬🇧 English'}
        </Button>
      </div>
      
      <div className="space-y-6">
        <div>
          <label htmlFor="input-text" className="block text-lg font-medium mb-2">{t.enterText}</label>
          <Textarea
            id="input-text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder={t.placeholder}
            className="min-h-[150px] text-lg"
          />
        </div>

        <div className="rounded-lg bg-muted p-6 h-[300px] overflow-auto">
          {inputText ? (
            <>
              <div className="text-lg font-medium mb-3">{t.originalText}</div>
              <div className="mb-6 text-xl">
                {inputText.split('').map((char, index) => (
                  <span key={index} className={`${char.match(/[A-Z]/i) ? getColorForLetter(char) : ''}`}>
                    {char}
                  </span>
                ))}
              </div>
              
              <div className="text-lg font-medium mb-3">{t.phoneticVersion}</div>
              <div className="leading-relaxed text-xl">
                {renderPhoneticText(inputText)}
              </div>
            </>
          ) : (
            <div className="text-center text-gray-500 h-full flex items-center justify-center">
              {t.emptyState}
            </div>
          )}
        </div>

        <Button 
          onClick={() => setInputText('')}
          variant="outline"
          className="w-full text-lg py-6"
          disabled={!inputText}
        >
          {t.clearText}
        </Button>
      </div>
    </Card>
  )
}
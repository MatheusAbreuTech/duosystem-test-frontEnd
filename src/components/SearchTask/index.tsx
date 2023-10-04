'use client'

import { useState } from 'react'
import * as S from './styles'
import Image from 'next/image'

const SearchTask = () => {
  const [inputValue, setInputValue] = useState('')
  return (
    <S.Wrapper>
      <S.Input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Pesquise uma tarefa..."
      />

      <Image src="/img/search.svg" alt="" width="20" height="20" />
    </S.Wrapper>
  )
}

export default SearchTask

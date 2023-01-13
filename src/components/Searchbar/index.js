import React, { useRef } from 'react'

import { ReactComponent as SearchIcon } from '../../assets/svg/search.svg'

import { SearchbarContainer, SearchbarInput } from './styles'

const Searchbar = ({ onSearch, ...rest }) => {
  const inputRef = useRef()

  function submitIfEnter(event) {
    if (event.key === 'Enter' && onSearch) onSearch(inputRef.current.value)
  }

  return (
    <SearchbarContainer>
      <SearchbarInput
        ref={inputRef}
        placeholder="Busque por um produto"
        onKeyDown={submitIfEnter}
        {...rest}
      />
      <SearchIcon
        onClick={onSearch ? () => onSearch(inputRef.current.value) : null}
        style={{ width: '50px' }}
      />
    </SearchbarContainer>
  )
}

export default Searchbar

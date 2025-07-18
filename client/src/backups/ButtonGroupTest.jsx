import { useState } from 'react'
import ButtonGroup from './components/ButtonGroup.jsx'
import Button from './components/Button.jsx'

export default function App() {
  const [isLoadingForSave, setIsLoadingForSave] = useState(false)
  const [isLoadingForCancle, setIsLoadingForCancle] = useState(false)
  const [isLoadingForDelete, setIsLoadingForDelete] = useState(false)
  return (
    <ButtonGroup direction="horizontal">
      <Button
        variant="primary"
        width={100}
        loading={isLoadingForSave}
        onClick={function () {
          setIsLoadingForSave(!isLoadingForSave)
        }}>
        저장
      </Button>
      <Button
        variant="secondary"
        width={100}
        loading={isLoadingForCancle}
        onClick={function () {
          setIsLoadingForCancle(!isLoadingForCancle)
        }}>
        취소
      </Button>
      <Button
        variant="danger"
        width={100}
        loading={isLoadingForDelete}
        onClick={function () {
          setIsLoadingForDelete(!isLoadingForDelete)
        }}>
        삭제
      </Button>
    </ButtonGroup>
  )
}

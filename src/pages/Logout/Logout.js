import { useNavigate } from 'react-router'

export default function Logout({ authed, setAuthed }) {
  const navigate = useNavigate()

  function onLogout() {
    setAuthed(false)
    navigate('/')
  }

  if (authed === true) {
    onLogout()
  } else {
    navigate('/home')
  }

  return
}

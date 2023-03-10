import React from 'react'
import { Link } from 'react-router-dom'

type Props = {}

const Footer = (props: Props) => {
  return (
    <footer className="main-footer text-center">
        <strong>
          Copyright &copy; 2022-2023{" "}
          <Link to="http://localhost:3000/">It's Easy</Link>.
        </strong>{" "}
        Tous droits reservés.
      </footer>
  )
}

export default Footer
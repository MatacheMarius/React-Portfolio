import React from "react"
import { FaGithub, FaFileAlt, FaEnvelope, FaLinkedin } from "react-icons/fa"

function Email(props) {
  let Tag = "a"
  if (props.as) {
    Tag = props.as
  }
  return (
    <Tag href="mailto:matachemarius92@gmail.com" aria-label="Email">< FaEnvelope /> {props.text}</Tag>
  )
}

function GitHub(props) {
  let Tag = "a"
  if (props.as) {
    Tag = props.as
  }
  return (
    <Tag target="_blank" rel="noopener noreferrer" href="https://github.com/MatacheMarius" aria-label="Email">< FaGithub /> {props.text}</Tag>
  )
}

function LinkedIn(props) {
  let Tag = "a"
  if (props.as) {
    Tag = props.as
  }
  return (
    <Tag target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/matache-marius-0324b4130/"
      aria-label="LinkedIn">
      <FaLinkedin /> {props.text}</Tag>
  )
}

function Resume(props) {
  let Tag = "a"
  if (props.as) {
    Tag = props.as
  }
  return (
    <Tag target="_blank" rel="noopener noreferrer" href="" aria-label="Resume">
      <FaFileAlt /> {props.text}</Tag>
  )
}

const Shell = { Email, GitHub, LinkedIn, Resume }

export { Email, GitHub, LinkedIn, Resume, Shell as default }
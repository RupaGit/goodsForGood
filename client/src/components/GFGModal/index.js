import React, { Component } from 'react'
import { Modal } from 'semantic-ui-react'


export function GFGModalHeader(props) {
    return <Modal.Header color={props.color} {...props}> {props.children}</Modal.Header>;
}

export function GFGModalContent(props) {
    return <Modal.Content color={props.color} {...props}> {props.children} </Modal.Content>;
}

export function GFGModalDesc(props) {
    return <Modal.Description color={props.color} {...props}> {props.children} </Modal.Description>;
}
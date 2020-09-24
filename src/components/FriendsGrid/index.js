import React from 'react';
import { Columns, Container } from 'react-bulma-components';

export default function FriendsGrid() {
    return (
        <Container>
            <Columns className='is-centered'>
                <Columns.Column size={3}>
                    <p>test</p>
                </Columns.Column>
                <Columns.Column size={3}>
                    <p>test</p>
                </Columns.Column>
                <Columns.Column size={3}>
                    <p>test</p>
                </Columns.Column>
            </Columns>
            <Columns className='is-centered'>
                <Columns.Column size={3}>
                    <p>test</p>
                </Columns.Column>
                <Columns.Column size={3}>
                    <p>test</p>
                </Columns.Column>
                <Columns.Column size={3}>
                    <p>test</p>
                </Columns.Column>
            </Columns>
            <Columns className='is-centered'>
                <Columns.Column size={3}>
                    <p>test</p>
                </Columns.Column>
                <Columns.Column size={3}>
                    <p>test</p>
                </Columns.Column>
                <Columns.Column size={3}>
                    <p>test</p>
                </Columns.Column>
            </Columns>
        </Container>
    );
}
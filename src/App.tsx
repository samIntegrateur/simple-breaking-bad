import React from 'react';
import './App.css';
import Layout from './layout/Layout';
import Section from './layout/Section/Section';
import CharacterHandler from './components/character/CharacterHandler';

function App() {
    return (
        <Layout>
            {/*<Section>*/}
            {/*    <h1>Hello World</h1>*/}
            {/*</Section>*/}
            <Section>
                <CharacterHandler />
            </Section>
        </Layout>
    );
}

export default App;

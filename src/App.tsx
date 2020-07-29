import React from 'react';
import './App.css';
import Layout from './layout/Layout';
import Section from './layout/Section/Section';
import CharacterSearch from './components/character/CharacterSearch/CharacterSearch';

function App() {
    return (
        <Layout>
            <Section>
                <h1>Hello World</h1>
            </Section>
            <Section>
                <CharacterSearch />
            </Section>
        </Layout>
    );
}

export default App;

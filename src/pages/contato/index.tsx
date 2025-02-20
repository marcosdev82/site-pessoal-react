import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Helmet } from 'react-helmet-async';
import { EntryTitle } from './styles';

const Contato = () => {
    return (
        <>
            <Helmet>
                <title>Contato - Marcos Tavares Desenvolvedor Fullstack</title>
                <meta name="description" content="Marcos Tavares, desenvolvedor fullstack especializado em Java Script, Dê vida às suas ideias com soluções digitais inteligentes. Desenvolvo aplicações robustas, escaláveis e intuitivas que unem design e funcionalidade para entregar excelência e resultados." />
                <link rel="canonical" href="https://marcostavares.dev.br/servicos" />
                <meta name="robots" content="index, follow"></meta>
                <meta name="keywords" content="desenvolvedor fullstack, desenvolvimento web, Contato, aplicações escaláveis, criação de sites, sistemas web, design responsivo, programação front-end, programação back-end, React, Node.js, Laravel, desenvolvimento de software, soluções digitais, programador fullstack, Marcos Tavares" />
                <meta property="og:locale" content="pt_BR"/>
                <meta property="og:type" content="website"/>
                <meta property="og:title" content="Contato - Marcos Tavares Fullstack"/>
                <meta property="og:description" content="Marcos Tavares,  Contato, desenvolvedor fullstack especializado em Java Script, Dê vida às suas ideias com soluções digitais inteligentes. Desenvolvo aplicações robustas, escaláveis e intuitivas que unem design e funcionalidade para entregar excelência e resultados."/>
                <meta property="og:url" content="https://marcostavares.dev"/>
                <meta property="og:site_name" content="Marcos Tavares FullStack"/>
                <meta property="article:publisher" content="https://www.facebook.com/marcostavares.dev"/>
                {/* <meta property="article:modified_time" content="2025-01-27T18:36:24+00:00"/> */}
                {/* <meta name="twitter:card" content="summary_large_image"/>
                <meta name="twitter:site" content="@marcostavares.dev"/> */}
                {/* <meta name="google-site-verification" content=""/> */}
            </Helmet>
            <EntryTitle>
                <h1>Contato</h1>
                <div>
                    <h1>Any place in your app!</h1>
                    <Formik
                    initialValues={{ email: '', password: '' }}
                    validate={values => {
                        const errors = {};
                        if (!values.email) {
                        errors.email = 'Required';
                        } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                        ) {
                        errors.email = 'Invalid email address';
                        }
                        return errors;
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                        }, 400);
                    }}
                    >
                    {({ isSubmitting }) => (
                        <Form>
                        <Field type="email" name="email" />
                        <ErrorMessage name="email" component="div" />
                        <Field type="password" name="password" />
                        <ErrorMessage name="password" component="div" />
                        <button type="submit" disabled={isSubmitting}>
                            Submit
                        </button>
                        </Form>
                    )}
                    </Formik>
                </div>
            </EntryTitle>
        </>
    );
}

export default Contato;

import { useState } from 'react'
import styles from './app.module.css'
import {Routes, Route} from 'react-router-dom';
import {Header, Footer} from './components';
import styled from 'styled-components';

const AppColumn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 1000px;
    min-height: 100%;
    margin: 0 auto;
    background-color: #fff;
`;

const Content = styled.div`
    padding: 120px 0;
`;

const H2 = styled.h2`
    text-align: center;
`;





export const Blog = () => {
    //состояние для текущего значения
    const [value, setValue] = useState('');




    return (
        <AppColumn>
            <Header/>
                <Content>
                    <H2>Контент страницы</H2>
                    <Routes>
                        <Route path="/" element={<div>Главная страница</div>}></Route>
                        <Route path="/login" element={<div>Авторизация</div>}></Route>
                        <Route path="/register" element={<div>Регистрация</div>}></Route>
                        <Route path="/users" element={<div>Пользователи</div>}></Route>
                        <Route path="/post" element={<div>Новая статья</div>}></Route>
                        <Route path="/post/:postId" element={<div>Статьи</div>}></Route>
                        <Route path="*" element={<div>Ошибка</div>}></Route>

                    </Routes>
                </Content>
            <Footer/>
        </AppColumn>
    )
}



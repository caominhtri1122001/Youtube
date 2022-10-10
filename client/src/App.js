import styled, { ThemeProvider } from "styled-components";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import { darkTheme, lightTheme } from "./utils/Theme";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Video from "./pages/Video";

const Container = styled.div`
    display: flex;
`;
const Main = styled.div`
    flex: 7;
    background-color: ${({ theme }) => theme.bg};
`;
const Wrapper = styled.div`
    padding: 22px 96px;
`;

function App() {
    const [darkMode, setDarkMode] = useState(true);

    return (
        <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
            <Container>
                <BrowserRouter>
                    <Menu darkMode={darkMode} setDarkMode={setDarkMode} />
                    <Main>
                        <Navbar />
                        <Wrapper>
                            <Routes path="/">
                                <Route index element={<Home />}></Route>
                                <Route path="video">
                                    <Route path=":id" element={<Video />} />
                                </Route>
                            </Routes>
                            <h1>test</h1>
                            <h1>test</h1>
                            <h1>test</h1>
                            <h1>test</h1>
                            <h1>test</h1>
                            <h1>test</h1>
                            <h1>test</h1>
                            <h1>test</h1>
                            <h1>test</h1>
                            <h1>test</h1>
                            <h1>test</h1>
                            <h1>test</h1>
                            <h1>test</h1>
                            <h1>test</h1>
                            <h1>test</h1>
                            <h1>test</h1>
                            <h1>test</h1>
                            <h1>test</h1>
                            <h1>test</h1>
                            <h1>test</h1>
                            <h1>test</h1>
                            <h1>test</h1>
                            <h1>test</h1>
                        </Wrapper>
                    </Main>
                </BrowserRouter>
            </Container>
        </ThemeProvider>
    );
}

export default App;

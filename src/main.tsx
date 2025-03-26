import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle, theme } from './lib/theme.ts'

import App from './App.tsx'
import Header from './components/Header/index.tsx'
import { store } from './store/store.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Header />
        <App />
      </ThemeProvider>
    </Provider>
  </StrictMode>,
)

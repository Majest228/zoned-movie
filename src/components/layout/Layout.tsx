'use client'

import { FC } from 'react'
import Navigation from './navigation/Navigation'
import { ILayout } from '../../interfaces/layout.interface'
import { QueryClient, QueryClientProvider } from 'react-query'
import styles from './Layout.module.scss'
import NavigationLogo from './navigation/navigation-logo/NavigationLogo'
const Layout: FC<ILayout> = ({ children }) => {
	const queryClient = new QueryClient({
		defaultOptions: { queries: { refetchOnWindowFocus: false } },
	})
	return (
		<html lang='en'>
			<body>
				<QueryClientProvider client={queryClient}>
					<div className={styles.wrapper}>
						<div className={styles.header}>
							<NavigationLogo />
						</div>
						<Navigation />
						<div className={styles.body}>{children}</div>
					</div>
				</QueryClientProvider>
			</body>
		</html>
	)
}

export default Layout

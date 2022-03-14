type HeaderProps = {
    styles : React.CSSProperties
}

export const Header = ({styles}: HeaderProps) => {
	return (
		<header style={styles}>
			<h1>Quotes Generator</h1>
		</header>
	);
};

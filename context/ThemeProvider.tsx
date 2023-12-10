"use client";

import {
	useEffect,
	useContext,
	createContext,
	useState,
	Dispatch,
	SetStateAction,
} from "react";

interface ThemeContextProps {
	mode: string;
	setMode: Dispatch<SetStateAction<string>>;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
	const [mode, setMode] = useState("");

	const handleThemeChange = () => {
		if (mode === "dark") {
			setMode("light");
			document.documentElement.classList.add("light");
			document.documentElement.classList.remove("dark");
		} else {
			setMode("dark");
			document.documentElement.classList.add("dark");
			document.documentElement.classList.remove("light");
		}
	};

	useEffect(() => {
		handleThemeChange();
	}, [mode]);

	return (
		<ThemeContext.Provider value={{ mode, setMode }}>
			{children}
		</ThemeContext.Provider>
	);
}

export function useTheme() {
	const context = useContext(ThemeContext);

	if (context === undefined) {
		throw new Error("useTheme must be used within a ThemeProvider");
	}

	return context;
}

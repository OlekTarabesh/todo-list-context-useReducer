import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import TodoAppProvider from "./contexts/todo-app.context";
import TodoInputProvider from "./contexts/todo-input.context";
import ListOfTodosProvider from "./contexts/listOfTodos.context";

import "./index.css";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<TodoAppProvider>
			<TodoInputProvider>
				<ListOfTodosProvider>
					<App />
				</ListOfTodosProvider>
			</TodoInputProvider>
		</TodoAppProvider>
	</React.StrictMode>
);

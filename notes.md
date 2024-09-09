============= vite start =========
+ npm create vite@latest
√ Project name: ... frontend
√ Select a framework: » React
√ Select a variant: » JavaScript

+ Done. Now run:
  cd frontend
  npm install
  npm install react-router-dom react-toastify // any package that you want
  npm run dev

========= vite with tailwind ===
=== see tailwind doc :
+ npm install -D tailwindcss postcss autoprefixer
+ npx tailwindcss init -p
+ cp past tailwind.config.js file 
+ Add the Tailwind directives to your CSS


$$$ 
    in vite if you remove import React from "react"
    in the component then if you want to use the snippet to import this compo in other one it will not work, you will do 'll it manully and you do not want that.
$$$


======================

                vite with js file problem :
+ Vite is configured to handle JSX syntax in files with .jsx or .tsx extensions, but not in files with .js extensions.

================ diff between Link & NavLink ========

+ Link component
=> The Link component is a basic component provided by React Router that allows you to create a hyperlink to a specific route in your application. It's used to navigate between routes without reloading the entire page.

+ NavLink component
=> The NavLink component is a special type of Link component that adds additional functionality. It allows you to specify a class or style to be applied when the link is active. This is useful for creating navigation menus where you want to highlight the current active link.
if it clicked or specificly if the link is mutched then it adds the active class to that item

*** <NavLink to="/" exact>
    Home
    </NavLink>



=============================== bg of hr ========================
// if you don't mk border-none you will not get the bar that has full 1.5px height (get just 0.7px) becouse border it already take 0.8px
<hr className="border-none h-[1.5px] w-8 bg-gray-800"/>
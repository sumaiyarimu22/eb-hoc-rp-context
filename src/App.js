// // import React from "react";
// // import ErrorBoundary from "./Components/ErrorBoundary";
// // import JerseyMaker from "./Components/JerseyMaker";

// // const App = () => {
// //   return (
// //     <div>
// //       <ErrorBoundary>
// //         <JerseyMaker name="Rashed" jerseyNum="15" />
// //       </ErrorBoundary>
// //       <ErrorBoundary>
// //         <JerseyMaker name="ashik" jerseyNum="14" />
// //       </ErrorBoundary>
// //       <ErrorBoundary>
// //         <JerseyMaker name="Rahul" jerseyNum="17" />
// //       </ErrorBoundary>
// //       <ErrorBoundary>
// //         <JerseyMaker name="Ratul" jerseyNum="13" />
// //       </ErrorBoundary>
// //       <ErrorBoundary>
// //         <JerseyMaker jerseyNum="16" />
// //       </ErrorBoundary>
// //     </div>
// //   );
// // };

// // export default App;

// import React from "react";
// // import ClickCounter from "./Components/ClickCounter";
// // import HoverCounter from "./Components/HoverCounter";
// import User from "./Components/User";
// const App = () => {
//   return (
//     <div>
//       {/* render korar method user          render props pattren*/}
//       <User render={(isLoggedIn) => (isLoggedIn ? "Sohan" : "visitor")} />

//       {/* <HoverCounter />
//       <ClickCounter /> */}
//     </div>
//   );
// };

// export default App;

import React from "react";
import Comp1 from "./Components/Comp1";
import { UserProvider } from "./Components/context/userContext";
const App = () => {
  const userName = "tumpa";
  return (
    <div>
      <UserProvider value={userName}>
        <Comp1 />
      </UserProvider>
    </div>
  );
};

export default App;

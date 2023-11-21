import { RouterProvider, createHashRouter } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import BookCover from "./components/BookCover/BookCover";
import { Suspense } from "react";
import Loading from "./components/Loading";
import Contents from "./components/Contents/Contents";
import Slide1 from "./components/classRoomGreetings/Slide1/Slide1";
import Slide6 from "./components/classRoomGreetings/Slide6/Slide6";
import Slide5 from "./components/classRoomGreetings/Slide5/Slide5";
import Slide4 from "./components/classRoomGreetings/Slide4/Slide4";
import Slide3 from "./components/classRoomGreetings/Slide3/Slide3";
import Slide2 from "./components/classRoomGreetings/Slide2/Slide2";
import ClassRoomGreetingsLayout from "./components/ClassRoomGreetingsLayout";

function App() {
  const routes = createHashRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: (
            <Suspense fallback={<Loading />}>
              <BookCover />
            </Suspense>
          ),
        },
        {
          path: "/contents",
          element: (
            <Suspense fallback={<Loading />}>
              <Contents />
            </Suspense>
          ),
        },
      ],
    },
    {
      path: "/",
      element: <ClassRoomGreetingsLayout />,
      children: [
        {
          path: "/classroomgreetings/slide1",
          element: (
            <Suspense fallback={<Loading />}>
              <Slide1 />
            </Suspense>
          ),
        },
        {
          path: "/classroomgreetings/slide2",
          element: (
            <Suspense fallback={<Loading />}>
              <Slide2 />
            </Suspense>
          ),
        },
        {
          path: "/classroomgreetings/slide3",
          element: (
            <Suspense fallback={<Loading />}>
              <Slide3 />
            </Suspense>
          ),
        },
        {
          path: "/classroomgreetings/slide4",
          element: (
            <Suspense fallback={<Loading />}>
              <Slide4 />
            </Suspense>
          ),
        },
        {
          path: "/classroomgreetings/slide5",
          element: (
            <Suspense fallback={<Loading />}>
              <Slide5 />
            </Suspense>
          ),
        },
        {
          path: "/classroomgreetings/slide6",
          element: (
            <Suspense fallback={<Loading />}>
              <Slide6 />
            </Suspense>
          ),
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={routes}></RouterProvider>
    </>
  );
}

export default App;

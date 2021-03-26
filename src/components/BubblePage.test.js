import React from "react";
import { render, screen } from "@testing-library/react";
import BubblePage from "./BubblePage";
import Axios from 'axios';

test("Renders BubblePage without errors", () => {
  // Finish this test
  render(<BubblePage/>);
});

test("Fetches data and renders the bubbles on mounting", async () => {
  // Sorry, I didn't ever wrap my head around mocks and asynchronous testing

  // // log in
  // await Axios.post('http://localhost:5000/api/login', {username: 'Lambda School', password: 'i<3Lambd4'})
  //   .then(res => {
  //     localStorage.setItem('token', res.data.payload);
  //   });

  // // render the component
  // render(<BubblePage/>);
  
  // expect(screen.getByText('lilac')).toBeInTheDocument();
});

//Task List
//1. Setup test for basic rendering of component
//2. Setup test for initial rendering of bubbles on loading
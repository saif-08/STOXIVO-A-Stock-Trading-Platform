import React from "react";
import {render,screen} from "@testing-library/react";
import '@testing-library/jest-dom';
import Hero from "../landing_page/home/Hero";

// test suite
 describe("Hero component",()=>{
    test("renders hero image",()=>{
        render(<Hero />);
        const HeroImage=screen.getByAltText("Hero Image");
        expect(HeroImage).toBeInTheDocument();
        expect(HeroImage).toHaveAttribute("src","media/images/homeHero.png");
    });
     test("renders signup button",()=>{
        render(<Hero />);
        const SignupButton=screen.getByRole("button",{name:/Signup Now/i});
        expect(SignupButton).toBeInTheDocument();
        expect(SignupButton).toHaveClass("btn-primary");
    })
 });
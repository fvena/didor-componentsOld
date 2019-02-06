<template lang="pug">
div

  h1 Didor Components

  router-link(:to="{name: 'docs', params: { section: 'packages' }}") Docs
  //- h1 Hola Mundo
  //- h2 Hola Mundo
  //- h3 Hola Mundo
  //- h4 Hola Mundo
  //- h5 Hola Mundo
  //- h6 Hola Mundo
  //- p Hola Mundo

  //- h1
  //-   a(href="#creating-the-first-website")
  //-     span.icon.icon-link
  //-   | {{ $t("messages.homeTitle") }}

  //- p
  //-   | In this guide, we will use Dimer to publish Markdown files to a fully functional
  //-   | documentation website.

  //- az-button Botón

  //- .toc
  //-   h2 Table of contents
  //-   ul
  //-     li
  //-       a(href="#prerequisites") Prerequisites
  //-     li
  //-       a(href="#creating-a-new-project") Creating a new project
  //-     li
  //-       p
  //-         a(href="#publishing") Publishing
  //-         ul
  //-           li
  //-             a(href="#compiler-error") Compiler error
  //-           li
  //-             a(href="#compiler-warnings") Compiler warnings
  //-     li
  //-       a(href="#next-steps") Next next-steps

  //- h2#prerequisites
  //-   a(href="#prerequisites")
  //-     span.icon.icon-link
  //-   | Prerequisites

  //- p Before getting started, make sure

  //- ol
  //-   li
  //-     | You have a Dimer account or
  //-     a(href="https://dimerapp.com/signup") create one.
  //-   li
  //-     | You are familiar with command line. We will be using
  //-     code Dimer CLI
  //-     | to publish documentation.
  //-   li Download Dimer CLI for your platform.
</template>

<style lang="scss" scoped>
// .docs__body {
//   flex: 1;
//   width: 100%;
//   max-width: 770px;
//   padding: 72px 0 60px 100px;
//   background-color: #fff;

//   h1 {
//     margin-bottom: 1.6rem;
//     font-size: 4.2rem;
//     font-weight: 700;
//     line-height: 1.3;
//     color: #101010;

//     + p {
//       font-size: 2.4rem;
//       color: #999;
//     }
//   }

//   h2 {
//     position: relative;
//     padding-top: 8rem;
//     margin-top: -3rem;
//     margin-bottom: 2rem;
//     font-size: 2.7rem;
//     font-weight: 700;
//     color: #101010;

//     &::before {
//       position: absolute;
//       top: 3rem;
//       right: 0;
//       left: 0;
//       height: 1px;
//       content: '';
//       background: #d8d8d8;
//     }

//     a {
//       color: #101010;
//       text-decoration: none;
//     }
//   }

//   p {
//     margin-bottom: 3.2rem;
//     font-size: 1.6rem;
//   }

//   a {
//     color: #6142d2;
//     background-image: linear-gradient(180deg, transparent 50%, #6142d2 0);
//     background-repeat: repeat-x;
//     background-position: 0 93%;
//     background-size: 100% 0.15rem;
//   }

//   ul {
//     margin-bottom: 3.2rem;
//     list-style: none;

//     li {
//       position: relative;
//       padding: 0;
//       margin-bottom: 4px;

//       * {
//         margin-bottom: 10px;
//       }

//       a {
//         background: none !important;
//       }
//     }
//   }
// }

// .toc {
//   position: relative;
//   margin-top: 6rem;
//   margin-bottom: 6rem;

//   h2 {
//     position: relative;
//     padding-top: 4rem;
//     margin: 0 0 1.5rem;
//     font-size: 1.8rem;
//     font-weight: 700;
//     color: #555;

//     &::before {
//       position: absolute;
//       top: 3rem;
//       right: 0;
//       left: 0;
//       height: 1px;
//       content: '';
//       background: none;
//     }
//   }

//   ul li {
//     padding: 0;
//     margin-bottom: 4px;

//     p {
//       margin: 0;
//     }

//     ul {
//       padding-left: 20px;
//       margin: 4px 0 10px;
//     }
//   }
// }
</style>

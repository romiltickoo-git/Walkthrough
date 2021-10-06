//----------Simple Bootstrap JS code------------------------------//
// sap.ui.define(
//                 [

//                 ],function (){
//                                  "use strict";
//                                  alert("Hello Roger");
                                 
//                              }
//               )
//----------------------------------------------------------------//


//----------Use of Controls---------------------------------------//
//  sap.ui.define(
//                  [
//                     "sap/m/Text"
//                  ],function (Text){
//                                   "use strict";
                                  
//                                new Text({
//                                    text:"Hello Text object!"
//                                }).placeAt("content");    
//                               }
//                )
//----------------------------------------------------------------//


//----------------------------------------------------------------//
// Standlone XML View 
//---------------------------------------------------------------//
// sap.ui.define(
//     [
//        "sap/m/Text",
//        "sap/ui/core/mvc/XMLView"
//     ],function (Text,XMLView){
//                      "use strict";
// // In Xml View having promise so thats why then is used to return the value.                     
//                      XMLView.create(
//                          {
//                         viewName:"search.po.view.App"
//                          }
//                      ).then( function(oView){
//                          oView.placeAt("content");
//                      } ); 
//                  }
//   )
//-----------------------------------------------------------------//


//------------------------------------------------------------------//
//-- Code for the component.js 
//------------------------------------------------------------------//

// sap.ui.define(
//     [
//        "sap/ui/core/ComponentContainer"
//     ],function (ComponentContainer){
//                      "use strict";                   
//                     new ComponentContainer({
//                         name:"search.po",
//                         settings:  {
//                                         id:"walk"
//                                    },
//                                    async:true
//                     }).placeAt("content");
//                  }
//   )

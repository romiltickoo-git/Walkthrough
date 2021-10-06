sap.ui.define([
	"sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
   // "sap/ui/model/resource/ResourceModel"
], function(
	UIComponent,
	JSONModel
	//ResourceModel
) {
	"use strict"; //Strict javascript 

	return UIComponent.extend("search.po.component", {
     metadata:{
        // rootView: {
        //     viewName: "search.po.view.App",
        //     type: "XML",
        //     id: "app",
        //     async: true
        // }
        manifest:"json"
    },
        init: function() {
        // call the init function of the parent
            UIComponent.prototype.init.apply(this, arguments);
        // Set data models
        var oData = {
            recipient:{
                      name:"ui5"
                      }
          };

            var oModel = new JSONModel(oData);
            this.setModel(oModel);

            // // set i18n model
            // var oResourceModel = new ResourceModel({
            //     bundleName: "search.po.i18n.i18n",
            //     supportedLocales: [""],
            //     fallbackLocale: ""
            // });
            // this.setModel(oResourceModel, "i18n")
                    
        
        },


	});
});
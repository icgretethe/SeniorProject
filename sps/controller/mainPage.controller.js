sap.ui.controller("sps.controller.mainPage", {

  // Go to the Warning Signs Page
  goToWarnPage: function() {
      //console.log(backData.id);
      //console.log(backData.viewName);
      //console.log(backData.action);
      app.to(warnPage);
      updateBackData(warnPage);
  },
  // Go to Info Page
  toInfoPage: function() {
      app.to(infoPage);
      updateBackData(warnPage);
  },
  // leave the app and go to the Patient Care Report
  toCareReport: function() {
      sap.m.URLHelper.redirect("https://publicdocs.maxient.com/reportingform.php?SIUEdwardsville&layout_id=2", false);
      updateBackData(warnPage);
  },
  //Go To Educate yourself Page
  toEducateYourselfPage: function() {
      sap.m.URLHelper.redirect("https://www.siue.edu/counseling/Resources_Suicide.shtml", false);
      updateBackData(warnPage);
  },
  // Go to the Stay Informed Age
  toStayInformedPage: function() {
	  app.to(stayInformedPage);
      updateBackData(warnPage);
	}
});

frm1.onsubmit = (e) => {
	e.preventDefault();
	const formData = new FormData(frm1);

	console.log("Form Data");
	for (let obj of formData) {
		console.log(obj);
	}
	var analyst = formData.get('Analyst');
	var Stream = formData.get('Stream');
	var Description = formData.get('Description');
	var Defect = formData.get('Defect');
	var ACE = formData.get('ACE');
	var PowerBi = formData.get('PowerBi');
	var NRT = formData.get('NRT');
	var Rule = formData.get('Rule');
	var TL = formData.get('TL');
	var Sprint = formData.get('Sprint');
	var ReleaseTarget = formData.get('ReleaseTarget');
	var EBD = formData.get('EBD');
	var Environment = formData.get('Environment');
	var Comment = formData.get('Comment');
	var BusinessLogic = formData.get('BusinessLogic');
	var TableAccess = formData.get('TableAccess');
	var BusinessSessions = formData.get('BusinessSessions');
	var LOE = formData.get('LOE');
	var Signoff = formData.get('SignOff');
	var txt = document.getElementById('textarea');
	txt.value='\u2022'+"  TMO Analyst (to request approval): " + analyst +'\n'+
	'\u2022'+" Stream to which it relates (R1/R2/R3/DLC/ASW/etc.):  " + Stream +	
	'\u2022'+" Description (make it as descriptive as possible):  " + Description +'\n'+
	'\u2022'+" Defect (if there is an INC or JID related):  " + Defect +'\n'+
	'\u2022'+" Is it an ACE mapping issue (in which case it will be MIRA or MIRMA):  " + ACE +'\n'+
	'\u2022'+" Is there Power BI impact (in which case the LOE should cover only backend work, and timeline refers only to backend work):  " + PowerBi +'\n'+
	'\u2022'+" Is there impact on NRT:  " + NRT +'\n'+
	'\u2022'+" Rule number(s) affected, if any:  " + Rule +'\n'+
	'\u2022'+" cVidya TL (Gali/Devendra/Amy/Bhushan/Tushar/ etc.):  " + TL +'\n'+
	'\u2022'+" Sprint Target for development (in which sprint you think that you will be ready to develop, SP7/SP8/etc.):  " + Sprint +'\n'+
	'\u2022'+" Release Target (Mar/Apr/etc. Can be the release where the sprint above goes to Production, or an earlier one if there is a request for down porting and feasibility to do it):  " + ReleaseTarget +'\n'+
	'\u2022'+" If the MIR is going to be tested separate from the sprint, indicate the EBD:  " + EBD +'\n'+
	'\u2022'+" If the MIR is going to be tested separate from the sprint, indicate on which environment:  " + Environment +'\n'+
	'\u2022'+" Comment (if any, to be added to Remarks in the tracker):  " + Comment +'\n'+
	'\u2022'+" Do we have all the business logic to support the change:  " + BusinessLogic +'\n'+
	'\u2022'+" Do we have all required data, table access, etc.:  " + TableAccess +'\n'+
	'\u2022'+" Is there need for grooming sessions with business:  " + BusinessSessions +'\n'+
	'\u2022'+" If there is enough information, what is the LOE (can be changed later):  " + LOE +'\n'+
	'\u2022'+" Is there need (in your opinion) to submit formal design for sign-off?:  " + Signoff;

	console.log(analyst);

}








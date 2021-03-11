/*************** E-MAIL COMMITTEE AIDE FORM *********************/

function showCommittee(Code){
	document.showCommitee.commiteeCode.value=Code
	document.showCommitee.submit();
}

// SENATE COMMITTEE AIDES
function repEmail_BH_SEN(Code){
	document.senEmail.commiteeCode.value=Code
	document.senEmail.submit();
}

// ASSEMBLY COMMITTEE AIDES
function repEmail_BH_ASM(Code){
	document.asmEmail.commiteeCode.value=Code
	document.asmEmail.submit();
}



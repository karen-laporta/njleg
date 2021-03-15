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

const setupSelectToReveal = (selectDropdown, toggleClass) => {
    const selectCommittee = document.getElementById(selectDropdown);
	 
	selectCommittee.addEventListener("change", function() {
        
			if(selectCommittee.value != "Select a Committee"){
				let committee = document.getElementById(selectCommittee.value);
				closeOpenElements(toggleClass);
				committee.classList.toggle(toggleClass);
			}
	    });
}

setupSelectToReveal("assemblyCommittee", "committee__show");
setupSelectToReveal("senateCommittee", "committee__show");

 
function showSenateCommittee() {
	const senate = document.getElementById('senate');
	closeOpenElements("assemblyShow");
	senate.classList.toggle("senateShow");
} 
function showAssemblyCommittee() {
	const assembly = document.getElementById('assembly');
	closeOpenElements("senateShow");
	assembly.classList.toggle("assemblyShow");
}


import { exportListCountry } from "./constraintFactory";
import { setPersonalInformations } from "./form_components/personalInformations";
import { setContactInformations } from "./form_components/contactInformation";
import { setCreatingAccount } from "./form_components/creatingAnAccount";
import { checkValidity } from "./dom_components/changeSteps";

exportListCountry();
setPersonalInformations();
setContactInformations();
setCreatingAccount();
checkValidity();

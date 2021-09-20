import {useAuth} from "./context/auth-context";
import {useShared} from "../shared/context/shared-context";

interface FeatureToggleProps {
    children: any;
    permissions: string[];
}

const isValidPermission = (permissions: string[] = [], userPermission: string[] = []): boolean => {
    return !!permissions.filter(permission => userPermission.includes(permission)).length;
};

const FeatureToggle = (props: FeatureToggleProps) => {
    const {permissions = [], children} = props;
    const userInfo = useAuth().user;
    if (!userInfo) return null;
    return isValidPermission(permissions, userInfo.permission) ? children : null;
};

const FeatureSharedToggle = (props: FeatureToggleProps) => {
    const {permissions = [], children} = props;
    const {vanityUrlInfo} = useShared();
    if (!vanityUrlInfo) return null;
    return isValidPermission(permissions, vanityUrlInfo.permission) ? children : null;
};
const isShared = document.location.href.includes("/shared");
export default isShared ? FeatureSharedToggle : FeatureToggle;

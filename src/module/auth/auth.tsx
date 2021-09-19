import LocalStorageDB, {USER_INFO} from "../../infra/localStorageDB";

interface FeatureToggleProps {
    children: any;
    permissions: string[];
}

const isValidPermission = (permissions: string[] = [], userPermission: string[] = []): boolean => {
    return !!permissions.filter(permission => userPermission.includes(permission)).length;
};

export const FeatureToggle = (props: FeatureToggleProps) => {
    const {permissions = [], children} = props;
    const userInfo = LocalStorageDB.load(USER_INFO);
    if (!userInfo) return null;
    return isValidPermission(permissions, userInfo.permission) ? children : null;
};

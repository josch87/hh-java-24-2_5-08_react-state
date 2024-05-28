import {StatusEnum} from "./model.ts";

export function isStatusEnum(status: StatusEnum | ''): status is StatusEnum {
    return status !== '';
}
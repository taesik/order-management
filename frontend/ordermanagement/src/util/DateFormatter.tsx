import {format} from "date-fns";
import {DATE_FORMAT, DATE_FORMAT_DATE_PICKER} from "../types/Constants";

export function formatDate(date:Date) {
    if (!date) return format(new Date(),DATE_FORMAT);
    return format(new Date(date),DATE_FORMAT);
}

export function formatDatePicker(date:Date) {
    if (!date) return format(new Date(),DATE_FORMAT_DATE_PICKER);
    return format(new Date(date),DATE_FORMAT_DATE_PICKER);
}
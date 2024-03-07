import { Structure } from "../dto/Dosage";
import { DateOrDateTimeWrapper } from "./DateOrDateTimeWrapper";
import { DayWrapper } from "./DayWrapper";

export class StructureWrapper {

    readonly value: Structure;

    constructor(iterationInterval: number, supplText: string, startDateOrDateTime: DateOrDateTimeWrapper, endDateOrDateTime: DateOrDateTimeWrapper, days: Array<DayWrapper>, dosagePeriodPostfix: string) {
        this.value = {
            iterationInterval,
            supplText,
            startDateOrDateTime: startDateOrDateTime && startDateOrDateTime.value,
            endDateOrDateTime: endDateOrDateTime && endDateOrDateTime.value,
            days: days.map(dayWrapper => dayWrapper.value),
            dosagePeriodPostfix: dosagePeriodPostfix
        };
    }
}

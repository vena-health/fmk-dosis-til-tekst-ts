import { LongTextConverterImpl } from "./longtextconverterimpl/LongTextConverterImpl";
import { DosageWrapper } from "./vowrapper/DosageWrapper";
import { DailyRepeatedConverterImpl } from "./longtextconverterimpl/DailyRepeatedConverterImpl";
import { FreeTextConverterImpl } from "./longtextconverterimpl/FreeTextConverterImpl";

export class LongTextConverter {

    private static _converters: LongTextConverterImpl[];

    private static get converters() {
        if (!LongTextConverter._converters) {
            LongTextConverter._converters = new Array<LongTextConverterImpl>();
        }


        // converters.add(new AdministrationAccordingToSchemaConverterImpl());
        LongTextConverter._converters.push(new FreeTextConverterImpl());
        // converters.add(new EmptyStructureConverterImpl());*/
        LongTextConverter._converters.push(new DailyRepeatedConverterImpl());
        /*	
        converters.add(new TwoDaysRepeatedConverterImpl());		
        converters.add(new WeeklyRepeatedConverterImpl());		
        converters.add(new DefaultLongTextConverterImpl());
        converters.add(new DefaultMultiPeriodeLongTextConverterImpl());
        */
        return LongTextConverter._converters;
    }
    public convert(dosageJson: any): string {
        let dosage = DosageWrapper.fromJsonObject(dosageJson);

        for (let converter of LongTextConverter.converters) {
            if (converter.canConvert(dosage))
                return converter.doConvert(dosage);
        }
        return null;
    }

    public static getConverter(dosage: DosageWrapper): LongTextConverterImpl {
        for (let converter of this.converters) {
            if (converter.canConvert(dosage))
                return converter;
        }
        return null;
    }
}

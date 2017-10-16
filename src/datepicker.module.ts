import { NgModule, ModuleWithProviders } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { DatePickerComponent } from "./datepicker/datepicker.component";
import { DualPickerComponent } from "./dualpicker/dualpicker.component";
import { CalendarComponent } from "./calendar/calendar.component";
import { CalendarGridComponent } from "./calendar-grid/calendar-grid.component";
import { DatePickerConfig } from "./datepicker.config";
import { DatePickerPopupService } from "./DatePickerPopupService";
import { DatePickerPopupComponent } from "./datepicker-popup/datepicker-popup.component";
import { DualPickerPopupComponent } from "./dualpicker-popup/dualpicker-popup.component";

export { DatePickerConfig } from "./datepicker.config";

@NgModule({
  exports: [DatePickerComponent, DualPickerComponent],
  declarations: [
    DatePickerComponent,
    DualPickerComponent,
    CalendarComponent,
    CalendarGridComponent,
    DatePickerPopupComponent,
    DualPickerPopupComponent
  ],
  providers: [DatePickerPopupService],
  entryComponents: [DatePickerPopupComponent, DualPickerPopupComponent],
  imports: [CommonModule, FormsModule]
})
export class DatePickerModule {}
// export class DatePickerUtil {
//   static forRoot(config: DatePickerConfig = <DatePickerConfig>{}): ModuleWithProviders {

//     return {
//       ngModule: DatePickerModule,
//       providers: [
//         { provide: DatePickerConfig, useValue: config }
//       ]
//     }
//   }
// }

// class emptyConfig extends DatePickerConfig { }

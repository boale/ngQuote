import { IndividualConfig, ToastrService } from 'ngx-toastr';

const toastrService = {
  success: (
    message?: string,
    title?: string,
    override?: Partial<IndividualConfig>
  ) => {
  },
  error: (
    message?: string,
    title?: string,
    override?: Partial<IndividualConfig>
  ) => {
  },
};

export const mockToastrServiceProvider = {
  provide: ToastrService,
  useValue: toastrService,
};

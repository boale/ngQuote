import { of } from 'rxjs';

export class NgxSmartModalServiceMock {
  create() {
    return {
      setData(data: any) {
        return {
          open() {
            return {
              onClose: of({}),
              onDataAdded: of(data),
              onCloseFinished: of({}),
              onDismissFinished: of({}),
            };
          },
        };
      },
    };
  }

  getModal(id: any) {
    return {
      open: function () {
        return;
      },
      close: function () {
        return;
      },
      isVisible: function () {
        return;
      },
      onOpen: of({}),
      onAnyCloseEvent: of({}),
      onAnyCloseEventFinished: of({}),
    };
  }

  get(id: any) {
    return {
      open: function () {
        return;
      },
      close: function () {
        return;
      },
      isVisible: function () {
        return;
      },
      getData: function() {
        return {};
      },
      setData: function() {
        return;
      },
      onOpen: of({}),
      onAnyCloseEvent: of({
        removeData() {
          return;
        },
      }),
      onAnyCloseEventFinished: of({
        removeData() {
          return;
        },
      }),
    };
  }

  setModalData() {
    return;
  }

  open() {
    return;
  }

  getModalStackCount() {
    return;
  }

  addModal() {
    return;
  }
}

import { Component, OnInit, Inject } from '@angular/core';
import { ApiService } from '../_services/api.service';
import { Router } from '@angular/router';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from '@angular/material/dialog';

export interface DialogData {
  plans: object;
  value: number;
  name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.scss']
})
export class PlanComponent implements OnInit {
  plans = [];
  selectPlan;

  constructor(
    private router: Router,
    public apiService: ApiService,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.apiService.getPlans().subscribe(
      res => {
        this.plans = res.plans;
      },
      error => {
        console.log(error);
      }
    );
  }

  openDialog(item, plans) {
    const dialogRef = this.dialog.open(DetailDialog, {
      width: '500px',
      data: { item, plans }
    });
  }

  openDialogAlert(item, plans) {
    const dialogRef = this.dialog.open(AlertDialog, {
      width: '500px',
      data: { item, plans }
    });
  }
}

@Component({
  selector: 'detail-dialog',
  templateUrl: 'dialog-plan.html'
})
export class DetailDialog {
  constructor(
    public dialogRef: MatDialogRef<DetailDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  activePlan(data, plans) {
    this.dialogRef.close();

    setTimeout(() => {

      plans.filter(item => {
        if (item.id !== data.id) {
          item.main = !item.main;
        }
      });

      data.main = !data.main;

    }, 500);
  }
}



@Component({
  selector: 'alert-dialog',
  templateUrl: 'dialog-alert.html'
})
export class AlertDialog {
  constructor(
    public dialogRef: MatDialogRef<AlertDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  activePlan(data, plans) {
    this.dialogRef.close();

    setTimeout(() => {

      plans.filter(item => {
        if (item.id !== data.id) {
          item.main = !item.main;
        }
      });

      data.main = !data.main;

    }, 500);
  }
}

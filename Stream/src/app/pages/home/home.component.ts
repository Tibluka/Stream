import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public episodes: Array<number> = []
  public selectedEpisode = 1
  public closeResult = '';
  public previewList = []

  constructor(private apiService: ApiService,
    private modalService: NgbModal) {
    for (let index = 1; index < 11; index++) {
      const element = this.episodes[index];
      this.episodes.push(index)
    }
  }

  ngOnInit(): void {
  }


  fetch() {
    debugger
    this.apiService.getApi(`1IG1FzI4xZy3I7LbsEiIcMVHguYy5syJp`).subscribe(res => {
      debugger
    })
  }

  open(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  filter(e: any) {
    this.episodes = []
    this.episodes.push(e.target.value)
  }

}

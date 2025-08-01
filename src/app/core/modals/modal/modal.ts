import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  viewChild,
} from '@angular/core';
import { worksInterface } from '../../../components/projects/works';

@Component({
  selector: 'app-modal',
  imports: [CommonModule],
  templateUrl: './modal.html',
  styleUrl: './modal.scss',
})
export class Modal implements OnInit {
  @ViewChild('workModal') workModal!: ElementRef;
  isModalOpen: boolean = false;
  workObj!: worksInterface;
  ngOnInit(): void {}

  openModal(work: worksInterface) {
    if (work) {
      this.workObj = work;

      this.isModalOpen = true;
    }
  }
  closeModal() {
    this.isModalOpen = false;
  }
}

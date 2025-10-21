import { Component, OnInit } from '@angular/core';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';

@Component({
  selector: 'app-viewer',
  imports: [NgxExtendedPdfViewerModule],
  templateUrl: './viewer.html',
  styleUrl: './viewer.scss',
})
export class Viewer implements OnInit {
  pdfSrc = '';

  ngOnInit(): void {
    const params = new URLSearchParams(window.location.search);
    this.pdfSrc = params.get('file') || '';
  }
}

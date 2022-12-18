import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { MoviesService } from '@services/movies.service';

@Component({
  selector: 'app-modal-trailer',
  templateUrl: './modal-trailer.component.html',
  styleUrls: ['./modal-trailer.component.scss']
})
export class ModalTrailerComponent implements OnInit {

  @Input() movie!: any;
  snippet: any;
  videoUrl?: string;
  embedVideo?: SafeResourceUrl;
  @Output() close = new EventEmitter<string>();

  constructor(private moviesService: MoviesService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    document.getElementById("modal")!.style.display = "block";

    this.movie.hasOwnProperty('original_title') ?
      this.movie = this.movie.original_title : this.movie = this.movie.title;

    this.moviesService.getTrailer(this.movie).subscribe(data => {
      this.snippet = data.items[0];
      this.videoUrl = "https://www.youtube.com/embed/" + this.snippet.id.videoId;
      this.embedVideo = this.sanitizer.bypassSecurityTrustResourceUrl(this.videoUrl);
    })
  }

  closeModal(): void {
    this.close.emit();
    document.getElementById("modal")!.style.display = "none";
  }

}

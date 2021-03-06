/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Provides access to reflection data about symbols. Used internally by Angular
 * to power dependency injection and compilation.
 */
var Reflector = /** @class */ (function () {
    function Reflector(reflectionCapabilities) {
        this.reflectionCapabilities = reflectionCapabilities;
    }
    Reflector.prototype.updateCapabilities = function (caps) { this.reflectionCapabilities = caps; };
    Reflector.prototype.factory = function (type) { return this.reflectionCapabilities.factory(type); };
    Reflector.prototype.parameters = function (typeOrFunc) {
        return this.reflectionCapabilities.parameters(typeOrFunc);
    };
    Reflector.prototype.annotations = function (typeOrFunc) {
        return this.reflectionCapabilities.annotations(typeOrFunc);
    };
    Reflector.prototype.propMetadata = function (typeOrFunc) {
        return this.reflectionCapabilities.propMetadata(typeOrFunc);
    };
    Reflector.prototype.hasLifecycleHook = function (type, lcProperty) {
        return this.reflectionCapabilities.hasLifecycleHook(type, lcProperty);
    };
    Reflector.prototype.getter = function (name) { return this.reflectionCapabilities.getter(name); };
    Reflector.prototype.setter = function (name) { return this.reflectionCapabilities.setter(name); };
    Reflector.prototype.method = function (name) { return this.reflectionCapabilities.method(name); };
    Reflector.prototype.importUri = function (type) { return this.reflectionCapabilities.importUri(type); };
    Reflector.prototype.resourceUri = function (type) { return this.reflectionCapabilities.resourceUri(type); };
    Reflector.prototype.resolveIdentifier = function (name, moduleUrl, members, runtime) {
        return this.reflectionCapabilities.resolveIdentifier(name, moduleUrl, members, runtime);
    };
    Reflector.prototype.resolveEnum = function (identifier, name) {
        return this.reflectionCapabilities.resolveEnum(identifier, name);
    };
    return Reflector;
}());
export { Reflector };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVmbGVjdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29yZS9zcmMvcmVmbGVjdGlvbi9yZWZsZWN0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBU0g7OztHQUdHO0FBQ0g7SUFDRSxtQkFBbUIsc0JBQXNEO1FBQXRELDJCQUFzQixHQUF0QixzQkFBc0IsQ0FBZ0M7SUFBRyxDQUFDO0lBRTdFLHNDQUFrQixHQUFsQixVQUFtQixJQUFvQyxJQUFJLElBQUksQ0FBQyxzQkFBc0IsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBRWhHLDJCQUFPLEdBQVAsVUFBUSxJQUFlLElBQWMsTUFBTSxDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRXhGLDhCQUFVLEdBQVYsVUFBVyxVQUFxQjtRQUM5QixNQUFNLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBRUQsK0JBQVcsR0FBWCxVQUFZLFVBQXFCO1FBQy9CLE1BQU0sQ0FBQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFFRCxnQ0FBWSxHQUFaLFVBQWEsVUFBcUI7UUFDaEMsTUFBTSxDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDOUQsQ0FBQztJQUVELG9DQUFnQixHQUFoQixVQUFpQixJQUFTLEVBQUUsVUFBa0I7UUFDNUMsTUFBTSxDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFDeEUsQ0FBQztJQUVELDBCQUFNLEdBQU4sVUFBTyxJQUFZLElBQWMsTUFBTSxDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRW5GLDBCQUFNLEdBQU4sVUFBTyxJQUFZLElBQWMsTUFBTSxDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRW5GLDBCQUFNLEdBQU4sVUFBTyxJQUFZLElBQWMsTUFBTSxDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRW5GLDZCQUFTLEdBQVQsVUFBVSxJQUFTLElBQVksTUFBTSxDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRXBGLCtCQUFXLEdBQVgsVUFBWSxJQUFTLElBQVksTUFBTSxDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRXhGLHFDQUFpQixHQUFqQixVQUFrQixJQUFZLEVBQUUsU0FBaUIsRUFBRSxPQUFpQixFQUFFLE9BQVk7UUFDaEYsTUFBTSxDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztJQUMxRixDQUFDO0lBRUQsK0JBQVcsR0FBWCxVQUFZLFVBQWUsRUFBRSxJQUFZO1FBQ3ZDLE1BQU0sQ0FBQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsV0FBVyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNuRSxDQUFDO0lBQ0gsZ0JBQUM7QUFBRCxDQUFDLEFBeENELElBd0NDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge1R5cGV9IGZyb20gJy4uL3R5cGUnO1xuaW1wb3J0IHtQbGF0Zm9ybVJlZmxlY3Rpb25DYXBhYmlsaXRpZXN9IGZyb20gJy4vcGxhdGZvcm1fcmVmbGVjdGlvbl9jYXBhYmlsaXRpZXMnO1xuaW1wb3J0IHtHZXR0ZXJGbiwgTWV0aG9kRm4sIFNldHRlckZufSBmcm9tICcuL3R5cGVzJztcblxuZXhwb3J0IHtQbGF0Zm9ybVJlZmxlY3Rpb25DYXBhYmlsaXRpZXN9IGZyb20gJy4vcGxhdGZvcm1fcmVmbGVjdGlvbl9jYXBhYmlsaXRpZXMnO1xuZXhwb3J0IHtHZXR0ZXJGbiwgTWV0aG9kRm4sIFNldHRlckZufSBmcm9tICcuL3R5cGVzJztcblxuLyoqXG4gKiBQcm92aWRlcyBhY2Nlc3MgdG8gcmVmbGVjdGlvbiBkYXRhIGFib3V0IHN5bWJvbHMuIFVzZWQgaW50ZXJuYWxseSBieSBBbmd1bGFyXG4gKiB0byBwb3dlciBkZXBlbmRlbmN5IGluamVjdGlvbiBhbmQgY29tcGlsYXRpb24uXG4gKi9cbmV4cG9ydCBjbGFzcyBSZWZsZWN0b3Ige1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcmVmbGVjdGlvbkNhcGFiaWxpdGllczogUGxhdGZvcm1SZWZsZWN0aW9uQ2FwYWJpbGl0aWVzKSB7fVxuXG4gIHVwZGF0ZUNhcGFiaWxpdGllcyhjYXBzOiBQbGF0Zm9ybVJlZmxlY3Rpb25DYXBhYmlsaXRpZXMpIHsgdGhpcy5yZWZsZWN0aW9uQ2FwYWJpbGl0aWVzID0gY2FwczsgfVxuXG4gIGZhY3RvcnkodHlwZTogVHlwZTxhbnk+KTogRnVuY3Rpb24geyByZXR1cm4gdGhpcy5yZWZsZWN0aW9uQ2FwYWJpbGl0aWVzLmZhY3RvcnkodHlwZSk7IH1cblxuICBwYXJhbWV0ZXJzKHR5cGVPckZ1bmM6IFR5cGU8YW55Pik6IGFueVtdW10ge1xuICAgIHJldHVybiB0aGlzLnJlZmxlY3Rpb25DYXBhYmlsaXRpZXMucGFyYW1ldGVycyh0eXBlT3JGdW5jKTtcbiAgfVxuXG4gIGFubm90YXRpb25zKHR5cGVPckZ1bmM6IFR5cGU8YW55Pik6IGFueVtdIHtcbiAgICByZXR1cm4gdGhpcy5yZWZsZWN0aW9uQ2FwYWJpbGl0aWVzLmFubm90YXRpb25zKHR5cGVPckZ1bmMpO1xuICB9XG5cbiAgcHJvcE1ldGFkYXRhKHR5cGVPckZ1bmM6IFR5cGU8YW55Pik6IHtba2V5OiBzdHJpbmddOiBhbnlbXX0ge1xuICAgIHJldHVybiB0aGlzLnJlZmxlY3Rpb25DYXBhYmlsaXRpZXMucHJvcE1ldGFkYXRhKHR5cGVPckZ1bmMpO1xuICB9XG5cbiAgaGFzTGlmZWN5Y2xlSG9vayh0eXBlOiBhbnksIGxjUHJvcGVydHk6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnJlZmxlY3Rpb25DYXBhYmlsaXRpZXMuaGFzTGlmZWN5Y2xlSG9vayh0eXBlLCBsY1Byb3BlcnR5KTtcbiAgfVxuXG4gIGdldHRlcihuYW1lOiBzdHJpbmcpOiBHZXR0ZXJGbiB7IHJldHVybiB0aGlzLnJlZmxlY3Rpb25DYXBhYmlsaXRpZXMuZ2V0dGVyKG5hbWUpOyB9XG5cbiAgc2V0dGVyKG5hbWU6IHN0cmluZyk6IFNldHRlckZuIHsgcmV0dXJuIHRoaXMucmVmbGVjdGlvbkNhcGFiaWxpdGllcy5zZXR0ZXIobmFtZSk7IH1cblxuICBtZXRob2QobmFtZTogc3RyaW5nKTogTWV0aG9kRm4geyByZXR1cm4gdGhpcy5yZWZsZWN0aW9uQ2FwYWJpbGl0aWVzLm1ldGhvZChuYW1lKTsgfVxuXG4gIGltcG9ydFVyaSh0eXBlOiBhbnkpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5yZWZsZWN0aW9uQ2FwYWJpbGl0aWVzLmltcG9ydFVyaSh0eXBlKTsgfVxuXG4gIHJlc291cmNlVXJpKHR5cGU6IGFueSk6IHN0cmluZyB7IHJldHVybiB0aGlzLnJlZmxlY3Rpb25DYXBhYmlsaXRpZXMucmVzb3VyY2VVcmkodHlwZSk7IH1cblxuICByZXNvbHZlSWRlbnRpZmllcihuYW1lOiBzdHJpbmcsIG1vZHVsZVVybDogc3RyaW5nLCBtZW1iZXJzOiBzdHJpbmdbXSwgcnVudGltZTogYW55KTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5yZWZsZWN0aW9uQ2FwYWJpbGl0aWVzLnJlc29sdmVJZGVudGlmaWVyKG5hbWUsIG1vZHVsZVVybCwgbWVtYmVycywgcnVudGltZSk7XG4gIH1cblxuICByZXNvbHZlRW51bShpZGVudGlmaWVyOiBhbnksIG5hbWU6IHN0cmluZyk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMucmVmbGVjdGlvbkNhcGFiaWxpdGllcy5yZXNvbHZlRW51bShpZGVudGlmaWVyLCBuYW1lKTtcbiAgfVxufVxuIl19